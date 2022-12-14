import React from 'react';
import {
    Form,
    Input,
  //   InputNumber,
  //   Cascader,
    Select,
    Row,
    Col,
  //   Checkbox,
    Button,
    Upload,
  //   DatePicker,
  //   AutoComplete,
  } from 'antd';


// const Card = (props) => {
// const {name, email, id} = props  

export const Card = ({name, email, id}) => { //destructuring

    return (
        <div className ='tc bg-light-green dib pa3 ma3 grow bw5 shadow-5 br4'>
        <img src={`https://robohash.org/${id}`} alt ='RobotPhoto' width='150px' height='150px'/>
            <div>
                
                <h4 className ='fw4 f5 1h-copy'>{name}</h4>
                <p className ='fw1 f6 lh-copy'>{email}</p>
                <p className ='fw1 f6 lh-copy'>{`Has an id of ${id}`}</p>
            </div>
        </div>
    );
}


export const Card2 = ({name, email, id}) => { //destructuring

    return (
            <div>

            <Row>
                <Col><img src={Carddata.user.profileimg}/></Col> <Col><a onClick={navigatouser}>{`${firstname} + " " ${lastname}`}</a></Col> <Col>Sign</Col>
            </Row>
            <Row>
                <Col><img>Content</img></Col> 
            </Row>
            <Row>
                <Col><span>Title</span></Col> 
            </Row>
            <Row>
                <Col><Row>Hey</Row><Row>Hey count</Row></Col>
                <Col><Row>Hey</Row><Row>Hey count</Row></Col>
                <Col><Row>Hey</Row><Row>Hey count</Row></Col>
                <Col><Row>Hey</Row><Row>Hey count</Row></Col>
            </Row>

            </div>
        );
    }


