
export default async function handler(req, res) {
  const {name, email, message} = req.body

  const name_form_no = process.env.NAME;
  const email_form_no = process.env.EMAIL;
  const message_form_no = process.env.MESSAGE;
  const formUrl = process.env.GOOGLEFORM_URL;

  try {
    await fetch(formUrl, {
      method: "POST",
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: `${name_form_no}=${encodeURIComponent(name)}&${email_form_no}=${encodeURIComponent(email)}&${message_form_no}=${encodeURIComponent(message)}`
    });
    res.status(200).send('ok')
  } catch (err) {
    console.log(err)
    res.status(500).send('failed')
  }
}

