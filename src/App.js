import React from "react";
import './App.css';
import Button from "react-bootstrap/Button";
import MyModal from './components/MyModal'
import AveragePrice from "./components/AveragePrice";

function App() {
    const [modalShow, setModalShow] = React.useState(false);

    return (<div>
        <div className={'Button'}>
            <Button variant="secondary" onClick={() => setModalShow(true)}>
                Open modal
            </Button>
        </div>

        <div>
            <AveragePrice/>
        </div>

        <MyModal
            name='Centered Modal'
            info='Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                            consectetur ac, vestibulum at eros.'
            day='01' month='Nov' hour='14:43pm' year='2022'
            show={modalShow}
            onHide={() => setModalShow(false)}
        />
    </div>);
}

export default App;
