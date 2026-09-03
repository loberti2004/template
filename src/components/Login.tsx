import { t } from '../i18n'
import './Login.scss'

const locale = 'es'

function Login() {
  return (
    <main className='login-page'>
      <section className='login-card' aria-label={t(locale, 'auth.title')}>
        <p className='login-label'>{t(locale, 'app.name')}</p>
        <h1>{t(locale, 'auth.title')}</h1>

        <form className='login-form'>
          <label className='field'>
            <span>{t(locale, 'auth.user')}</span>
            <input type='text' name='user' placeholder={t(locale, 'auth.placeholderUser')} />
          </label>

          <label className='field'>
            <span>{t(locale, 'auth.password')}</span>
            <input
              type='password'
              name='password'
              placeholder={t(locale, 'auth.placeholderPassword')}
            />
          </label>

          <button type='submit'>{t(locale, 'auth.submit')}</button>
        </form>
      </section>
    </main>
  )
}

export default Login
