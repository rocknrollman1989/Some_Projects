import React from 'react'
import Select from 'react-select';
import '../../node_modules/react-select/dist/react-select';


const options = [
    { value: 'English', label: 'English' },
    { value: 'Ukrainian', label: 'Ukrainian' },
    { value: 'Russin', label: 'Russin' },
];



class LanguageSelect extends React.Component {
    handleChange = value => {
        // this is going to call setFieldValue and manually update values.topcis
        this.props.onChange('languages', value);
    };

    handleBlur = () => {
        // this is going to call setFieldTouched and manually update touched.topcis
        this.props.onBlur('languages', true);
    };

    render() {
        return (
            <div style={{ margin: '1rem 0' }}>
                <label htmlFor="language">
                    Language{' '}
                </label>
                <Select
                    instanceId='lang'
                    id="00N0X00000DROm1"
                    name="00N0X00000DROm1"
                    options={options}
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                    value={this.props.value}
                />
                {!!this.props.error &&
                    this.props.touched && (
                        <div style={{ color: 'red', marginTop: '.5rem' }}>
                            {this.props.error}
                        </div>
                    )}
            </div>
        );
    }
}


export default LanguageSelect