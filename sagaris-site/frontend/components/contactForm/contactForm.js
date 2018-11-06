import React, { Component } from "react";
import validator from './contactForm.validator'
import LanguageSelect from './contactForm.select'
import TextInput from './contactForm.textinput'
import {SuccessSC} from '../../lib/styledComponents'  

class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            wasSend: false
        }
      }

    successButton = () => {
        const { handleSubmit } = this.props;
        handleSubmit()
        this.setState({wasSend: true})
        setTimeout(()=>{
            this.setState({wasSend: false})
        },3000)
    }

    render() {
        const {
            values,
            touched,
            errors,
            handleChange,
            handleBlur,
            handleSubmit,
            setFieldValue,
            setFieldTouched,
            isSubmitting
        } = this.props;
        return (
            <form style={{gridArea: 'Form'}}  onSubmit={this.successButton}>
                <TextInput
                    id="firstName"
                    type="text"
                    // label="Name"
                    placeholder="Name"
                    error={touched.firstName && errors.firstName}
                    value={values.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {/* <TextInput
                    id="last_name"
                    type="text"
                    label="Last Name"
                    placeholder="Doe"
                    error={touched.lastName && errors.lastName}
                    value={values.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                /> */}
                
                <TextInput
                    id="phone"
                    type="phone"
                    // label="Phone"
                    placeholder="Phone number"
                    error={touched.phone && errors.phone}
                    value={values.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                <TextInput
                    id="email"
                    type="email"
                    // label="Email"
                    placeholder="Email"
                    error={touched.email && errors.email}
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                <TextInput
                    id="company"
                    type="text"
                    // label="Company"
                    placeholder="Company name"
                    error={touched.company && errors.company}
                    value={values.company}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {/* <LanguageSelect
                    values={values.languages}
                    onChange={setFieldValue}
                    onBlur={setFieldTouched}
                    error={errors.languages}
                    touched={touched.languages}
                /> */}
                <TextInput
                    id="forSales"
                    // label="Some questions"
                    placeholder="Message"
                    error={touched.forSales && errors.forSales}
                    value={values.forSales}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className='textarea'
                    component='textarea'
                    // textArea={true}
                />
                <button type="submit" disabled={isSubmitting}>
                    {this.state.wasSend ? <SuccessSC/> : this.props.send}
                </button>
            </form>
        );
    }
};





export default validator(ContactForm)
