import { Formik, Field, Form } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { jobCreate } from '../../../../redux/actionCreators/jobActionCreators'

const RecruiterPostJob = () => {
	const recruiterId = useSelector(state => state.user.profile?.id)
	const dispatch = useDispatch()

	const initialValues = {
		title: '',
		banner: null,
		type: '',
		salary: '',
		level: '',
		vacancy: '',
		starting: '',
		duration: '',
		language: '',
		skill: '',
		keyword: '',
		location: '',
		map: '',
		overview: '',
		todo: '',
	}

	const onSubmitHandle = values => {
		dispatch(jobCreate(values, recruiterId))
	}

	const validateHandle = values => {
		const errors = {}

		if (!values.title) {
			errors.title = 'Title is Mandetory'
		}

		if (values.banner === null) {
			errors.banner = 'Banner is Mandetory'
		}

		if (!values.type) {
			errors.type = 'Must choose a type'
		}

		if (!values.salary) {
			errors.salary = 'Salary is Required'
		}

		if (!values.level) {
			errors.level = 'Level not chosen'
		}

		if (!values.vacancy) {
			errors.vacancy = 'Field is Required'
		}

		if (!values.starting) {
			errors.starting = 'Field is Required'
		}

		if (!values.duration) {
			errors.duration = 'Field is Required'
		}

		if (!values.location) {
			errors.location = 'Field is Required'
		}

		if (!values.keyword) {
			errors.keyword = 'Field is Required'
		}

		return errors
	}

	return (
		<div className='dashboard-main'>
			<h3 className='dashboard-title'>Post a new Job</h3>
			<div className='dashboard-content'>
				<div className='post-job-area'>
					<Formik initialValues={initialValues} onSubmit={onSubmitHandle} validate={validateHandle}>
						{({ values, errors, touched, handleChange, handleSubmit, handleReset, setFieldValue }) => (
							<Form onSubmit={handleSubmit} onReset={handleReset} encType='multipart/form-data'>
								<div className='row'>
									<div className='col-lg-12'>
										<div className='row'>
											<div className='col-lg-8'>
												<div className='form-field'>
													<label htmlFor='title'>Job Title</label>
													<Field
														name='title'
														type='text'
														className={
															touched.title
																? errors.title
																	? 'form-control is-invalid'
																	: 'form-control is-valid'
																: 'form-control'
														}
														value={values.title}
														onChange={handleChange}
														placeholder='e.g. Web Developer'
													/>
													{touched.title && errors.title ? (
														<div className='invalid-feedback'>{errors.title}</div>
													) : (
														<div className='valid-feedback'>Looks good!</div>
													)}
												</div>
											</div>
											<div className='col-lg-4'>
												<div className='form-field'>
													<label htmlFor='banner'>Banner</label>
													<div className='file_edit_button' htmlFor='banner'>
														<input
															name='banner'
															type='file'
															accept='image/*'
															onChange={event => {
																setFieldValue('banner', event.currentTarget.files[0])
															}}
														/>
														{touched.banner && errors.banner ? (
															<div className='invalid-feedback'>{errors.banner}</div>
														) : (
															<div className='valid-feedback'>Looks good!</div>
														)}
													</div>
												</div>
											</div>
										</div>

										<div className='row'>
											<div className='col-lg-6'>
												<div className='form-field'>
													<label htmlFor=''>Job Type</label>
													<Field
														name='type'
														as='select'
														className={
															touched.type
																? errors.type
																	? 'form-control is-invalid'
																	: 'form-control is-valid'
																: 'form-control'
														}
														value={values.type}
														onChange={handleChange}
													>
														<option value=''>- Select Type -</option>
														<option value='1'>Hourly</option>
														<option value='2'>Part Time</option>
														<option value='3'>Project Based</option>
													</Field>
													{touched.type && errors.type ? (
														<div className='invalid-feedback'>{errors.type}</div>
													) : (
														<div className='valid-feedback'>Looks good!</div>
													)}
												</div>
											</div>
											<div className='col-lg-6'>
												<div className='form-field'>
													<label htmlFor=''>Salary</label>
													<Field
														name='salary'
														type='text'
														className={
															touched.salary
																? errors.salary
																	? 'form-control is-invalid'
																	: 'form-control is-valid'
																: 'form-control'
														}
														value={values.salary}
														onChange={handleChange}
														placeholder='e.g. 18,000'
													/>
													{touched.salary && errors.salary ? (
														<div className='invalid-feedback'>{errors.salary}</div>
													) : (
														<div className='valid-feedback'>Looks good!</div>
													)}
												</div>
											</div>
										</div>

										<div className='row'>
											<div className='col-lg-6'>
												<div className='form-field'>
													<label htmlFor=''>Level</label>
													<Field
														name='level'
														as='select'
														className={
															touched.level
																? errors.level
																	? 'form-control is-invalid'
																	: 'form-control is-valid'
																: 'form-control'
														}
														value={values.level}
														onChange={handleChange}
													>
														<option value=''>- Select Level -</option>
														<option value='1'>Novice</option>
														<option value='2'>Beginer</option>
														<option value='3'>Intermediate</option>
														<option value='4'>Advanced</option>
														<option value='5'>Expert</option>
													</Field>
													{touched.level && errors.level ? (
														<div className='invalid-feedback'>{errors.level}</div>
													) : (
														<div className='valid-feedback'>Looks good!</div>
													)}
												</div>
											</div>
											<div className='col-lg-6'>
												<div className='form-field'>
													<label htmlFor=''>Vacancy</label>
													<Field
														name='vacancy'
														type='text'
														className={
															touched.vacancy
																? errors.vacancy
																	? 'form-control is-invalid'
																	: 'form-control is-valid'
																: 'form-control'
														}
														value={values.vacancy}
														onChange={handleChange}
														placeholder='e.g. 3'
													/>
													{touched.vacancy && errors.vacancy ? (
														<div className='invalid-feedback'>{errors.vacancy}</div>
													) : (
														<div className='valid-feedback'>Looks good!</div>
													)}
												</div>
											</div>
										</div>

										<div className='row'>
											<div className='col-lg-6'>
												<div className='form-field'>
													<label htmlFor=''>Starting Date</label>
													<Field
														name='starting'
														type='date'
														className={
															touched.starting
																? errors.starting
																	? 'form-control is-invalid'
																	: 'form-control is-valid'
																: 'form-control'
														}
														value={values.starting}
														onChange={handleChange}
														placeholder='01/02/2022'
													/>
													{touched.starting && errors.starting ? (
														<div className='invalid-feedback'>{errors.starting}</div>
													) : (
														<div className='valid-feedback'>Looks good!</div>
													)}
												</div>
											</div>
											<div className='col-lg-6'>
												<div className='form-field'>
													<label htmlFor=''>Duration</label>
													<Field
														name='duration'
														type='text'
														className={
															touched.duration
																? errors.duration
																	? 'form-control is-invalid'
																	: 'form-control is-valid'
																: 'form-control'
														}
														value={values.duration}
														onChange={handleChange}
														placeholder='e.g. 5 Months/Infinite'
													/>
													{touched.duration && errors.duration ? (
														<div className='invalid-feedback'>{errors.duration}</div>
													) : (
														<div className='valid-feedback'>Looks good!</div>
													)}
												</div>
											</div>
										</div>

										<div className='row'>
											<div className='col-lg-6'>
												<div className='form-field'>
													<label htmlFor=''>Location</label>
													<Field
														name='location'
														type='text'
														className={
															touched.location
																? errors.location
																	? 'form-control is-invalid'
																	: 'form-control is-valid'
																: 'form-control'
														}
														value={values.location}
														onChange={handleChange}
														placeholder='e.g. Uttara'
													/>
													{touched.location && errors.location ? (
														<div className='invalid-feedback'>{errors.location}</div>
													) : (
														<div className='valid-feedback'>Looks good!</div>
													)}
												</div>
											</div>
											<div className='col-lg-6'>
												<div className='form-field'>
													<label htmlFor=''>Keywords</label>
													<Field
														name='keyword'
														type='text'
														className={
															touched.keyword
																? errors.keyword
																	? 'form-control is-invalid'
																	: 'form-control is-valid'
																: 'form-control'
														}
														value={values.keyword}
														onChange={handleChange}
														placeholder='e.g. Development,Designer'
													/>
													{touched.keyword && errors.keyword ? (
														<div className='invalid-feedback'>{errors.keyword}</div>
													) : (
														<div className='valid-feedback'>Looks good!</div>
													)}
												</div>
											</div>
										</div>

										<div className='row'>
											<div className='col-lg-6'>
												<div className='form-field'>
													<label htmlFor=''>Skills</label>
													<Field
														name='skill'
														type='text'
														value={values.skill}
														onChange={handleChange}
														placeholder='e.g. React,Django'
													/>
												</div>
											</div>
											<div className='col-lg-6'>
												<div className='form-field'>
													<label htmlFor=''>Language</label>
													<Field
														name='language'
														type='text'
														value={values.language}
														onChange={handleChange}
														placeholder='e.g. Bangla'
													/>
												</div>
											</div>
										</div>

										<div className='row'>
											<div className='col-lg'>
												<div className='form-field'>
													<label htmlFor=''>Job Overview</label>
													<Field
														name='overview'
														as='textarea'
														rows='3'
														value={values.overview}
														onChange={handleChange}
														placeholder='Write Overview'
													/>
												</div>
											</div>
										</div>
										<div className='row'>
											<div className='col-lg'>
												<div className='form-field'>
													<label htmlFor=''>Duty Responsibilities</label>
													<Field
														name='todo'
														as='textarea'
														rows='3'
														value={values.todo}
														onChange={handleChange}
														placeholder='List Responsibilities'
													/>
												</div>
											</div>
										</div>
										<div className='row'>
											<div className='col-lg'>
												<div className='form-field'>
													<label htmlFor=''>Select Location On Map</label>
													<Field
														name='map'
														type='text'
														value={values.map}
														onChange={handleChange}
														placeholder='90.456,45.6886'
													/>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className='save-all-change mt-30'>
									<div className='row'>
										<div className='col-lg-4 offset-lg-4'>
											<input type='submit' className='btn' value='Create New Job' />
										</div>
									</div>
								</div>
							</Form>
						)}
					</Formik>
				</div>
			</div>
		</div>
	)
}

export default RecruiterPostJob
