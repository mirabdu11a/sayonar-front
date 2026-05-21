import React, { useEffect, useState } from 'react'
import { useTranslation } from "react-i18next";
import { CHAT_ID, TOKEN } from "../constants"
import axios from "axios"
import { toast } from "react-toastify"
import { useModal } from '../context/ModalContext';



export default function ApplicationModal() {
  const { t } = useTranslation();
  const { open, closeModal } = useModal();

  useEffect(() => {

  if (open) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return () => {
    document.body.style.overflow = "auto";
  };

}, [open]);

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

      closeModal()

    } catch (error) {
      toast.error(t("toastError"))
    } finally {
      setLoading(false)
    }
  }

  if (!open) return null;

  return (
    <div className="custom-modal">

      <div className="modal-overlay" onClick={closeModal}></div>

      <div className="modal-content">

        <div className='close-btn' onClick={closeModal}>
          ✕
        </div>

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
  )
}