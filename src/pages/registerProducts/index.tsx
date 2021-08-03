import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Select } from 'antd';
import GlobalMenu from '../../components/globalMenu';

interface IError {
    email?: string;
    password?: string;
    gender?: string;
    interest?: string;
}

interface IFormValues {
    email: string;
    password: string;
    gender: string;
    interest: string[];
  }

const RegisterProducts = () => {
    const initialValues: IFormValues = {
        email: '',
        password: '',
        gender: 'masculine',
        interest: [],
    };

    const { Option } = Select;

    return(
        <>
            <GlobalMenu />
            <h1>Formulário de cadastro de produtos</h1>
            <Formik
                initialValues={initialValues}
                validate={values => {
                    let errors: IError = {};
                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }
                    if (!values.password){
                        errors.password = 'Required';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                    }, 400);
                }}
            >
            {({ values, isSubmitting }) => (
                <Form>
                    <Field type="email" name="email" />
                    <ErrorMessage name="email" component="div" />
                    <Field type="password" name="password" />
                    <ErrorMessage name="password" component="div" />

                    <fieldset>
                        <legend>Sexo</legend>
                        <Field type="radio" id="masculine" name="gender" value="masculine" />
                        <label htmlFor="masculine">Masculino</label>
                        <Field type="radio" id="feminine" name="gender" value="feminine" />
                        <label htmlFor="feminine">Feminino</label>
                    </fieldset>

                    <fieldset>
                        <legend>Áreas de interesse</legend>
                        <Field type="checkbox" id="music" name="interest" value="music" />
                        <label htmlFor="music">Música</label>
                        <Field type="checkbox" id="sport" name="interest" value="sport" />
                        <label htmlFor="sport">Esporte</label>
                        <Field type="checkbox" id="technology" name="interest" value="technology" />
                        <label htmlFor="technology">Tecnologia</label>
                    </fieldset>
                    <label htmlFor="uf">UF</label>
                    <div>
                        <Select id="uf" style={{width: 120}}>
                            <Option value="es">ES</Option>
                            <Option value="mg">MG</Option>
                            <Option value="rj">RJ</Option>
                            <Option value="sp">SP</Option>
                        </Select>
                    </div>

                    <button type="submit" disabled={isSubmitting}>
                        Submit
                    </button>
                </Form>
            )}
            </Formik>
        </>
    );
}

export default RegisterProducts;