import { FaRegGrinAlt, FaSearch } from "react-icons/fa"
import { Link } from "react-router-dom"
const RecruiterMessage = () => {
	document.title = 'HourlyFinder | Messages'
  return (
    <div className='dashboard-main'>
      <h3 className='dashboard-title'>Messages</h3>
      <div className='dashboard-content'>
        <div className='msging-area'>
          <div className='row g-0'>
            <div className='col-lg-3'>
              <div className='msg-left-bar'>
                <div className='contact-search-bar'>
                  <form action=''>
                    <div className='form-field'>
                      <input type='text' name='search' placeholder='Search...' />
                      <span className='icon'>
                        <FaSearch />
                      </span>
                    </div>
                  </form>
                </div>
                <div className='conversation-contact-list scroll'>
                  <div className='contact-list'>
                    <div className='single-contact-item'>
                      <div
                        className='contact-pic'
                        style={{
                          backgroundImage:
                            "url(https://image.shutterstock.com/image-vector/man-character-face-avatar-glasses-260nw-562077406.jpg)",
                        }}
                      ></div>
                      <div className='contact-info unread'>
                        <h6>Rashed Ahmed</h6>
                        <p>Yeah, I have seen that...</p>
                      </div>
                    </div>
                    <div className='single-contact-item active'>
                      <div
                        className='contact-pic'
                        style={{
                          backgroundImage:
                            "url(https://cdnb.artstation.com/p/assets/images/images/009/836/467/medium/maria-bo-schatzis-stream-profilpicture.jpg?1521139318)",
                        }}
                      ></div>
                      <div className='contact-info'>
                        <h6>Sajeeb Debnath</h6>
                        <p>Acitve 20 min ago</p>
                      </div>
                    </div>
                    <div className='single-contact-item'>
                      <div
                        className='contact-pic'
                        style={{
                          backgroundImage:
                            "url(https://thumbs.dreamstime.com/b/male-avatar-icon-flat-style-male-user-icon-cartoon-man-avatar-hipster-vector-stock-91462914.jpg)",
                        }}
                      ></div>
                      <div className='contact-info'>
                        <h6>Niloy Roy</h6>
                        <p>Sorry, i am busy now..</p>
                      </div>
                    </div>
                    <div className='single-contact-item'>
                      <div
                        className='contact-pic'
                        style={{
                          backgroundImage:
                            "url(https://cdnb.artstation.com/p/assets/images/images/009/836/467/medium/maria-bo-schatzis-stream-profilpicture.jpg?1521139318)",
                        }}
                      ></div>
                      <div className='contact-info'>
                        <h6>Md Rahim</h6>
                        <p>I saw your resume...</p>
                      </div>
                    </div>
                    <div className='single-contact-item'>
                      <div
                        className='contact-pic'
                        style={{
                          backgroundImage:
                            "url(https://image.shutterstock.com/image-vector/man-character-face-avatar-glasses-260nw-562077406.jpg)",
                        }}
                      ></div>
                      <div className='contact-info unread'>
                        <h6>Himel Saha</h6>
                        <p>Thank you very much...</p>
                      </div>
                    </div>
                    <div className='single-contact-item'>
                      <div
                        className='contact-pic'
                        style={{
                          backgroundImage:
                            "url(https://thumbs.dreamstime.com/b/male-avatar-icon-flat-style-male-user-icon-cartoon-man-avatar-hipster-vector-stock-91462914.jpg)",
                        }}
                      ></div>
                      <div className='contact-info'>
                        <h6>Jisan Hossain</h6>
                        <p>sir, i can do this..</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='msg-main'>
                <div className='msg-top-bar'>
                  <Link to='/'>
                    <h5>Sajeeb Debnath</h5>
                  </Link>

                  <p>Active 20 min ago</p>
                </div>
                <div className='conversation-text-area'>
                  <div className='conversation-text-list'>
                    <div className='conversation-text'>
                      <div className='text'>
                        <p className='msg'>
                          Sir, I have sent you my resume. Please review the document and reply me if you like
                          it.
                        </p>
                        <p className='time'>08:37 PM</p>
                      </div>
                    </div>
                    <div className='conversation-text sender'>
                      <div className='text'>
                        <p className='msg'>Okay. I will review it shortly. :)</p>
                        <p className='time'>08:37 PM</p>
                      </div>
                    </div>
                    <div className='conversation-text sender'>
                      <div className='text'>
                        <p className='msg'>Okay. I will review it shortly. :)</p>
                        <p className='time'>08:37 PM</p>
                      </div>
                    </div>
                    <div className='conversation-text'>
                      <div className='text'>
                        <p className='msg'>
                          Sir, I have sent you my resume. Please review the document and reply me if you like
                          it.
                        </p>
                        <p className='time'>08:37 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='msg-sending-area'>
                  <div className='files-area'>
                    <div className='emoji-field'>
                      <span>
                        <FaRegGrinAlt />
                      </span>
                    </div>
                    <div className='file-field'>
                      <input type='file' name='file' />
                    </div>
                  </div>
                  <div className='msg-field form-field'>
                    <input type='text' placeholder='Write message..' />
                    <button type='submit'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        aria-hidden='true'
                        role='img'
                        width='1em'
                        height='1em'
                        preserveAspectRatio='xMidYMid meet'
                        viewBox='0 0 28 28'
                      >
                        <path
                          fill='currentColor'
                          d='M3.79 2.773L24.86 12.85a1.25 1.25 0 0 1 0 2.256L3.79 25.183a1.25 1.25 0 0 1-1.746-1.456l2.108-7.728a.5.5 0 0 1 .415-.364l10.21-1.387a.25.25 0 0 0 .195-.15l.018-.062a.25.25 0 0 0-.157-.268l-.055-.015l-10.2-1.387a.5.5 0 0 1-.414-.364L2.044 4.23A1.25 1.25 0 0 1 3.79 2.773Z'
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-3'>
              <div className='msg-right-bar'>
                <div className='contact-information'>
                  <div>
                    <div
                      className='contact-profile'
                      style={{
                        backgroundImage:
                          "url(https://cdnb.artstation.com/p/assets/images/images/009/836/467/medium/maria-bo-schatzis-stream-profilpicture.jpg?1521139318)",
                      }}
                    ></div>

                    <div className='information-text'>
                      <Link to='/'>
                        <h4>Sajeeb Debnath</h4>
                      </Link>

                      <p className='designation'>Human Resource</p>
                      <p className='company'>Alpha Beta Company</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecruiterMessage
