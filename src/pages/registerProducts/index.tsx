import { useFormik } from 'formik';
import * as Yup from 'yup';
import GlobalMenu from "../../components/GlobalMenu";
import { Alert } from 'react-bootstrap';

interface IFormValues {
    name?: string;
    email?: string;
    description?: string;
}

const RegisterProducts = () => {
    const validate = (values: IFormValues) => {
        const errors: IFormValues = {};
        if (!values.name) {
            errors.name = 'Obrigatório';
        }

        if (!values.email) {
            errors.email = 'Obrigatório';
        } else {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9._]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Formato inválido';
            }
        }

        if (!values.description) {
            errors.description = 'Obrigatório';
        }
        return errors;
    }
    
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            description: '',
        },
        /* validate: (values) => validate(values), */
        validationSchema: Yup.object({
            name: Yup.string().required('Obrigatório'),
            email: Yup.string()
            .email('Formato inválido')
            .required('Obrigatório'),
            description: Yup.string().required('Obrigatório'),
        }),
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        }
    });

    return(
        <>
            <GlobalMenu />
            <h1>Cadastro de Produtos</h1>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {
                        formik.errors.name && formik.touched.name
                        ? <Alert variant="danger">{formik.errors.name}</Alert>
                        : null
                    }
                </div>
                <div>
                    <label htmlFor="email">E-mail:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {
                        formik.errors.email && formik.touched.email
                        ? <Alert variant="danger">{formik.errors.email}</Alert>
                        : null
                    }
                </div>
                <div>
                    <label htmlFor="description">Descrição:</label>
                    <input
                        type="text"
                        id="description"
                        name="description"
                        value={formik.values.description}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {
                        formik.errors.description && formik.touched.description
                        ? <div className="errorMessage">{formik.errors.description}</div>
                        : null
                    }
                </div>
                <button type="submit">Cadastrar</button>
            </form>
        </>
    );
}

export default RegisterProducts;