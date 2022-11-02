import React, {Component} from 'react';
import Button from "react-bootstrap/Button";

class AveragePrice extends Component {
    render() {
        const userAction = async () => {

            var Globalsayings = new Map();
            const response = await fetch('http://test.teaching-me.org/categories/v1/categories', {
                method: 'GET', headers: {
                    'Accept-Language': 'en'
                }
            });
            const MyGlobalCategory = await response.json();
            console.log(MyGlobalCategory, 'MyGlobalCategory')

            var GlobalSuma = 0


            for (let i = 0; i < MyGlobalCategory.length; i++) {
                const MyCategory = MyGlobalCategory[i].childrenCategories

                var Sayings = new Map();


                for (let j = 0; j < MyCategory.length; j++) {

                    const categoryName = MyCategory[j].name
                    const categoryCode = MyCategory[j].code

                    var pages = 0;
                    var suma = 0;
                    do {
                        const response = await fetch('http://test.teaching-me.org/categories/v1/search', {
                            method: 'POST', headers: {
                                'Accept-Language': 'en', 'Content-Type': 'application/json'
                            }, body: JSON.stringify({
                                "categories": [categoryCode], "page": pages, "pageSize": 10
                            })
                        });
                        var MyTeachers = await response.json();
                        // console.log(MyTeachers.teachers, 'MyTeachers', categoryCode, categoryName)

                        for (let k = 0; k < MyTeachers.teachers.length; k++) {
                            suma += MyTeachers.teachers[k].pricePerHour
                        }


                        pages += 1;
                    } while (pages < MyTeachers.totalResults / 10);
                    const average_price = suma / MyTeachers.totalResults;
                    console.log(categoryName, 'average_price', average_price)

                    const response = await fetch('http://test.teaching-me.org/categories/v1/average-price', {
                        method: 'POST', headers: {
                            'Content-Type': 'application/json'
                        }, body: JSON.stringify({
                            'categoryName': categoryName, "averagePrice": average_price
                        })
                    });


                    Sayings.set(categoryName, average_price)
                    GlobalSuma += average_price
                }
                const Global_average_price = GlobalSuma / MyCategory.length
                console.log(MyCategory, MyGlobalCategory[i].name, 'Global_average_price', Global_average_price,)
                Globalsayings.set(MyGlobalCategory[i].name, Global_average_price).set('Global' + MyGlobalCategory[i].name, Sayings)


                GlobalSuma = 0;
            }
            console.log(Globalsayings)
        }

        return (<div>
            <Button onClick={() => (userAction())}>
                Calculate average price
            </Button>
        </div>);
    }
}

export default AveragePrice;