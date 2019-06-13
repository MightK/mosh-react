import React, { Component } from 'react';
import Input from "./common/input";
import Joi from "joi-browser";
class LoginForm extends Component {

    state={
        account:{
            username:"",
            password:""
        },
        errors:{}
    }
    //joi验证需要创建的对象
    schema={
        username:Joi.string().required().label("Username"),
        password:Joi.string().required().label("Password")
    }
    //提交时验证joi验证
    validate=()=>{
        const result=Joi.validate(this.state.account,this.schema,{abortEarly:false})
        console.log(result);
        if(!result.error) return null;
        const errors={};
        for(let item of result.error.details){
            errors[item.path[0]]=item.message;
        }
        return errors;
    }

    //输入时验证
    validataPrev=({name,value})=>{
        const obj={[name]:value};
        const sechma={[name]:this.schema[name]};
        const {error}=Joi.validate(obj,sechma);
        console.log(Joi.validate(obj,sechma));
        return   error ? error.details[0].message: null;  
    }
    //阻止表单提交时重载以及joi表单验证
    handleSubmit=e=>{
        e.preventDefault();
        const errors= this.validate();
        console.log(errors);
        this.setState({errors:errors || {}})
        if(errors) return ;
        console.log("阻止提交表单的时候页面重载");
    }
    //改变输入框内内容时更新state
    handleChange=({target:input})=>{
        console.log(input);
        const errors={...this.state.errors};
        const errorMessage=this.validataPrev(input);
        if(errorMessage) 
            {
                errors[input.name]=errorMessage;
            }
        else
            {//因为每次改变输入框的内容时就会刷新这个函数
                delete errors[input.name]
            }
        const account={...this.state.account};
        account[input.name]=input.value;
        this.setState({account,errors})
    }
  
    render() { 
        const {account,errors}=this.state
        return (
        <div >
            <h1>login</h1>
            <form onSubmit={this.handleSubmit}>
            <Input 
                account={account}
                handleChange={this.handleChange}
                name="username"
                label="UserName"
                error={errors.username}
            />
            <Input 
                account={account}
                handleChange={this.handleChange}
                name="password"
                label="PassWord"
                error={errors.password}
            />
                <button disabled={this.validate()} className="btn btn-primary">Login</button>
            </form>
        </div>  );
    }
}
 
export default LoginForm;