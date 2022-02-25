import LeftContent from './commonAuth/LeftContent'
import { Formik, Field, Form } from 'formik'

const Login = () => {
	const initialValues = {
		email: '',
		password: '',
		passCheck: false,
	}

	const onSubmitHandle = values => {
		console.log('Submitted:', values.email, values.password, values.passCheck)
	}

	const validateHandle = values => {
		const errors = {}

		if (!values.email) {
			errors.email = 'Field is Required'
		} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
			errors.email = 'Invalid Email Address'
		}

		if (!values.password) {
			errors.password = 'Field is Required'
		} else if (values.password.length < 8) {
			errors.password = 'Must be atleast 8 characters long'
		}

		return errors
	}
	return (
		<div className='registration-area'>
			<div className='registration-box'>
				<LeftContent page='login' />
				<div className='registration-form'>
					<div className='form'>
						<h2>Sign in</h2>

						<Formik initialValues={initialValues} onSubmit={onSubmitHandle} validate={validateHandle}>
							{({ values, errors, touched, handleChange, handleSubmit, handleReset }) => (
								<Form onSubmit={handleSubmit} onReset={handleReset}>
									<div className='form-field email'>
										<label htmlFor='email'>Email</label>
										<Field
											name='email'
											type='email'
											className={
												touched.email
													? errors.email
														? 'form-control is-invalid'
														: 'form-control is-valid'
													: 'form-control'
											}
											value={values.email}
											onChange={handleChange}
											placeholder='Enter Email Name'
										/>
										{touched.email && errors.email ? (
											<div className='invalid-feedback'>{errors.email}</div>
										) : (
											<div className='valid-feedback'>Looks good!</div>
										)}
									</div>

									<div className='form-field password'>
										<label htmlFor='password'>Password</label>
										<Field
											name='password'
											type='password'
											className={
												touched.password
													? errors.password
														? 'form-control is-invalid'
														: 'form-control is-valid'
													: 'form-control'
											}
											value={values.password}
											onChange={handleChange}
											placeholder='Enter Password'
										/>
										{touched.password && errors.password ? (
											<div className='invalid-feedback'>{errors.password}</div>
										) : (
											<div className='valid-feedback'>Strong Password!</div>
										)}
									</div>

									<div className='form-check form-field stay-login'>
										<Field
											name='passCheck'
											type='checkbox'
                      className="form-check-input"
											checked={values.passCheck}
											onChange={handleChange}
										/>
										<label
											htmlFor='passCheck'
											className={
												touched.passCheck
													? values.passCheck
														? 'text-success'
														: 'text-danger'
													: null
											}
										>
											{touched.passCheck
												? values.passCheck
													? 'Password Saved'
													: 'Password Not Saved'
												: 'Save Password'}
										</label>
									</div>

									<div className='form-field'>
										<input type='submit' value='Sign in' className='btn submit' />
									</div>
								</Form>
							)}
						</Formik>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Login
