import React from 'react'
import { withFormik } from "formik";
import * as Yup from "yup";
import fetch from "isomorphic-unfetch";


const validator = withFormik({
    validationSchema: ((props) => {
       return Yup.object().shape({
        firstName: Yup.string()
                .required(`${props.form.is_required}`),
            email: Yup.string()
                .email(`${props.form.wrong_email}`)
                .required(`${props.form.is_required}`),
            phone: Yup.mixed()
                .required(`${props.form.is_required}`)
                .test('len', `${props.form.phone_length}`, val => val ? val.length >= 9 && val.length <= 12 : null),
            company: Yup.string()
                    .required(`${props.form.is_required}`),
            forSales: Yup.string()
                .min(20, `${props.form.message_length}`)
                .required(`${props.form.is_required}`)
        })
    }),

    

    mapPropsToValues: (props) => ({
        firstName: '',
        last_name: '',
        email: '',
        phone: '',
        company: '',
        state: '',
        languages: [],
        lang: props.lang,
        forSales: ''
    }),
    handleSubmit: (payload, { setSubmitting,resetForm, props }) => {
        const fields = {
            'oid': props.orgid,
            'retURL': props.my_link,
            // 'first_name': payload.firstName,
            'last_name': payload.firstName,
            'email': payload.email,
            'phone': payload.phone,
            // 'debug': 1,
            // 'debugEmail': 'retrocarman1989@gmail.com',
            'company': payload.company,
            // 'state': payload.state,
            //  language : props.lang,
            //  forSales : payload.forSales             
        }
        fields[props.language] = props.lang;
        fields[props.forsales] = payload.forSales;
        // console.log(fields)
        
        
        let url = 'https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8'
        Object.keys(fields).map( i => {
            url = url + `&` + i + `=` + fields[i]
        }
        )
        fetch(url, {
            mode: 'no-cors',
            method: 'post',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: fields
        });
        resetForm()
        
        setSubmitting(false);
    },
    displayName: "MyForm"
    
});
// console.log(fields)

export default validator