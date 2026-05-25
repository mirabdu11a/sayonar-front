import React, { useState } from 'react'
import { useTranslation } from "react-i18next";
import { CHAT_ID, TOKEN } from "../constants"
import axios from "axios"
import { toast } from "react-toastify"

export default function ContactBody() {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const sendMessage = async (e) => {
    e.preventDefault()

    if (!formData.name || !formData.phone || !formData.message) {
      toast.error(t("toastRed"))
      return
    }

    const text = `
      📩 Новая заявка!
      👤 Имя: ${formData.name}
      📞 Телефон: ${formData.phone}
      💬 Сообщение: ${formData.message}
    `

    try {
      setLoading(true)

      await axios.post(
        `https://api.telegram.org/bot${TOKEN}/sendMessage`,
        {
          chat_id: CHAT_ID,
          text,
        }
      )

      toast.success(t("toastGreen"))

      setFormData({
        name: "",
        phone: "",
        message: "",
      })

    } catch (error) {
      console.log(error)
      toast.error(t("toastError"))
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className='ContactBody'>
      <div className="container">
        <div className="row">
          <div className="col-md-6 title">
            <h1>{t("contactBodyTitle")}</h1>
            <p>{t("contactBodyInfo")}</p>
          </div>
        </div>

        <div className="row">

          <div className="col-md-6 block">
            <div className='body-contact__info'>

              <div className='row '>

                <div className='col-md-6 contact-row'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path opacity="0.4" d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z" fill="#292D32"/>
                    <path d="M12.0008 12.87C11.1608 12.87 10.3108 12.61 9.66076 12.08L6.53075 9.57997C6.21075 9.31997 6.15076 8.84997 6.41076 8.52997C6.67076 8.20997 7.14076 8.14997 7.46076 8.40997L10.5908 10.91C11.3508 11.52 12.6407 11.52 13.4007 10.91L16.5308 8.40997C16.8508 8.14997 17.3308 8.19997 17.5808 8.52997C17.8408 8.84997 17.7908 9.32997 17.4608 9.57997L14.3308 12.08C13.6908 12.61 12.8408 12.87 12.0008 12.87Z" fill="#292D32"/>
                  </svg>

                  <h5>{t("email")}</h5>
                  <p>{t("emailInfo")}</p>
                  <b>hello@sayonar.uz</b>
                </div>

                <div className='col-md-6 contact-row'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M22.53 21.47L21.79 20.73C22.17 20.15 22.4 19.45 22.4 18.7C22.4 16.66 20.74 15 18.7 15C16.66 15 15 16.66 15 18.7C15 20.74 16.66 22.4 18.7 22.4C19.45 22.4 20.15 22.17 20.73 21.79L21.47 22.53C21.62 22.68 21.81 22.75 22 22.75C22.19 22.75 22.38 22.68 22.53 22.53C22.82 22.24 22.82 21.76 22.53 21.47Z" fill="#292D32"/>
                    <path opacity="0.4" d="M2 12.9698V6.98977C2 4.23977 4.24 2.00977 7 2.00977H17C19.76 2.00977 22 4.23977 22 6.99977V13.9798C22 16.7298 19.76 18.9598 17 18.9598H15.5C15.19 18.9598 14.89 19.1098 14.7 19.3598L13.2 21.3498C12.54 22.2298 11.46 22.2298 10.8 21.3498L9.29999 19.3598C9.12999 19.1398 8.78 18.9598 8.5 18.9598H7C4.24 18.9598 2 16.7298 2 13.9798V12.9698Z" fill="#292D32"/>
                    <path d="M12.0002 12C11.4402 12 10.9902 11.55 10.9902 11C10.9902 10.45 11.4402 10 11.9902 10C12.5402 10 12.9902 10.45 12.9902 11C12.9902 11.55 12.5602 12 12.0002 12Z" fill="#292D32"/>
                    <path d="M16.0002 12C15.4402 12 14.9902 11.55 14.9902 11C14.9902 10.45 15.4402 10 15.9902 10C16.5402 10 16.9902 10.45 16.9902 11C16.9902 11.55 16.5602 12 16.0002 12Z" fill="#292D32"/>
                    <path d="M8.00024 12C7.44024 12 6.99023 11.55 6.99023 11C6.99023 10.45 7.44023 10 7.99023 10C8.54023 10 8.99023 10.45 8.99023 11C8.99023 11.55 8.56024 12 8.00024 12Z" fill="#292D32"/>
                  </svg>

                  <h5>{t("svyaz")}</h5>
                  <p>{t("svyazInfo")}</p>
                  <b>{t("svyazManager")}</b>
                </div>

              </div>

              <div className='row'>

                <div className='col-md-6 contact-row'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path opacity="0.4" d="M20.6191 8.45C19.5691 3.83 15.5391 1.75 11.9991 1.75C11.9991 1.75 11.9991 1.75 11.9891 1.75C8.45912 1.75 4.41912 3.82 3.36912 8.44C2.19912 13.6 5.35912 17.97 8.21912 20.72C9.27912 21.74 10.6391 22.25 11.9991 22.25C13.3591 22.25 14.7191 21.74 15.7691 20.72C18.6291 17.97 21.7891 13.61 20.6191 8.45Z" fill="#292D32"/>
                    <path d="M11.9996 13.4602C13.7393 13.4602 15.1496 12.0499 15.1496 10.3102C15.1496 8.57046 13.7393 7.16016 11.9996 7.16016C10.2599 7.16016 8.84961 8.57046 8.84961 10.3102C8.84961 12.0499 10.2599 13.4602 11.9996 13.4602Z" fill="#292D32"/>
                  </svg>

                  <h5>{t("office")}</h5>
                  <p>{t("officeInfo")}</p>
                  <b>{t("addres")}</b>
                </div>

                <div className='col-md-6 contact-row'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M17.62 10.7501C17.19 10.7501 16.85 10.4001 16.85 9.9801C16.85 9.6101 16.48 8.8401 15.86 8.1701C15.25 7.5201 14.58 7.1401 14.02 7.1401C13.59 7.1401 13.25 6.7901 13.25 6.3701C13.25 5.9501 13.6 5.6001 14.02 5.6001C15.02 5.6001 16.07 6.1401 16.99 7.1101C17.85 8.0201 18.4 9.1501 18.4 9.9701C18.4 10.4001 18.05 10.7501 17.62 10.7501Z" fill="#292D32"/>
                    <path d="M21.2298 10.75C20.7998 10.75 20.4598 10.4 20.4598 9.98C20.4598 6.43 17.5698 3.55 14.0298 3.55C13.5998 3.55 13.2598 3.2 13.2598 2.78C13.2598 2.36 13.5998 2 14.0198 2C18.4198 2 21.9998 5.58 21.9998 9.98C21.9998 10.4 21.6498 10.75 21.2298 10.75Z" fill="#292D32"/>
                    <path opacity="0.4" d="M11.79 14.21L8.52 17.48C8.16 17.16 7.81 16.83 7.47 16.49C6.44 15.45 5.51 14.36 4.68 13.22C3.86 12.08 3.2 10.94 2.72 9.81C2.24 8.67 2 7.58 2 6.54C2 5.86 2.12 5.21 2.36 4.61C2.6 4 2.98 3.44 3.51 2.94C4.15 2.31 4.85 2 5.59 2C5.87 2 6.15 2.06 6.4 2.18C6.66 2.3 6.89 2.48 7.07 2.74L9.39 6.01C9.57 6.26 9.7 6.49 9.79 6.71C9.88 6.92 9.93 7.13 9.93 7.32C9.93 7.56 9.86 7.8 9.72 8.03C9.59 8.26 9.4 8.5 9.16 8.74L8.4 9.53C8.29 9.64 8.24 9.77 8.24 9.93C8.24 10.01 8.25 10.08 8.27 10.16C8.3 10.24 8.33 10.3 8.35 10.36C8.53 10.69 8.84 11.12 9.28 11.64C9.73 12.16 10.21 12.69 10.73 13.22C11.09 13.57 11.44 13.91 11.79 14.21Z" fill="#292D32"/>
                    <path d="M21.9696 18.33C21.9696 18.61 21.9196 18.9 21.8196 19.18C21.7896 19.26 21.7596 19.34 21.7196 19.42C21.5496 19.78 21.3296 20.12 21.0396 20.44C20.5496 20.98 20.0096 21.37 19.3996 21.62C19.3896 21.62 19.3796 21.63 19.3696 21.63C18.7796 21.87 18.1396 22 17.4496 22C16.4296 22 15.3396 21.76 14.1896 21.27C13.0396 20.78 11.8896 20.12 10.7496 19.29C10.3596 19 9.96961 18.71 9.59961 18.4L12.8696 15.13C13.1496 15.34 13.3996 15.5 13.6096 15.61C13.6596 15.63 13.7196 15.66 13.7896 15.69C13.8696 15.72 13.9496 15.73 14.0396 15.73C14.2096 15.73 14.3396 15.67 14.4496 15.56L15.2096 14.81C15.4596 14.56 15.6996 14.37 15.9296 14.25C16.1596 14.11 16.3896 14.04 16.6396 14.04C16.8296 14.04 17.0296 14.08 17.2496 14.17C17.4696 14.26 17.6996 14.39 17.9496 14.56L21.2596 16.91C21.5196 17.09 21.6996 17.3 21.8096 17.55C21.9096 17.8 21.9696 18.05 21.9696 18.33Z" fill="#292D32"/>
                  </svg>

                  <h5>{t("phone")}</h5>
                  <p>{t("phoneInfo")}</p>
                  <b>+998 (33) 509 00 10</b>
                </div>

              </div>

            </div>
          </div>

          <div className="col-md-6 block ">

            <form className='body-contact__form' onSubmit={sendMessage}>

              <div>
                <p>{t("inputName")}</p>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t("inputNameP")}
                />
              </div>

              <div>
                <p>{t("inputPhone")}</p>

                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder={t("inputPhoneP")}
                />
              </div>

              <div>
                <p>{t("inputMessage")}</p>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t("inputMessageP")}
                ></textarea>
              </div>

              <button type='submit' disabled={loading}>
                {loading ? t("formButtonProcces") : t("recieveButton")}
              </button>

            </form>

          </div>
        </div>
      </div>
    </section>
  )
}