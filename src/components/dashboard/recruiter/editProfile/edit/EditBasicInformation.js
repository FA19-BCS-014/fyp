import React from "react"

const EditBasicInformation = () => {
  return (
    <>
      <h3 className='dashboard-title'>Edit Profile</h3>
      <div className='dashboard-content'>
        <div className='edit-profile-area'>
          <form action='' style={{ overflow: "hidden" }}>
            <div className='edit-basic-information'>
              <h5 className='edit-title'>Basic Information</h5>
              <div className='edit-basic-form'>
                <div className='row'>
                  <div className='col-lg-9'>
                    <div className='row'>
                      <div className='col-lg-6'>
                        <div className='form-field'>
                          <label htmlFor=''>First Name</label>
                          <input type='text' placeholder='first name' />
                        </div>
                      </div>
                      <div className='col-lg-6'>
                        <div className='form-field'>
                          <label htmlFor=''>Last Name</label>
                          <input type='text' placeholder='last name' />
                        </div>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col-lg-12'>
                        <div className='form-field'>
                          <label htmlFor=''>User Name</label>
                          <input type='text' placeholder='www.hourlyfinder.com/user/rashed360' />
                        </div>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col-lg-6'>
                        <div className='form-field'>
                          <label htmlFor=''>Email</label>
                          <input type='email' placeholder='eg. exmple@gmail.com' />
                        </div>
                      </div>
                      <div className='col-lg-6'>
                        <div className='form-field'>
                          <label htmlFor=''>Phone</label>
                          <input type='text' placeholder='01xxxxxxxxxx' />
                        </div>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col-lg-6'>
                        <div className='form-field'>
                          <label htmlFor=''>NID/Birth Certificate No.</label>
                          <input type='email' placeholder='eg. 43490342341' />
                        </div>
                      </div>
                      <div className='col-lg-6'>
                        <div className='form-field'>
                          <label htmlFor=''>Date of Birth</label>
                          <input type='date' placeholder='01xxxxxxxxxx' />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-3'>
                    <div className='form-field edit-profile-picture'>
                      <label htmlFor=''>Profile Picture</label>
                      <div
                        className='profile-img-edit'
                        htmlFor='profile-pic'
                        style={{
                          backgroundImage: "url(https://placeimg.com/100/100/people?t=1640373129965)",
                        }}
                      >
                        <input type='file' id='profile-pic' />
                      </div>
                      <p>Profile picture must be less than 1MB and 300x300px aspect ratio.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='save-all-change mt-10'>
              <div className='row'>
                <div className='col-lg-4 offset-lg-4'>
                  <input type='submit' className='btn btn-main' value='Save Change' />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default EditBasicInformation
