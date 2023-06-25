import styles from './components.module.css'
import ErrorIcon from '../assets/imgs/errorIcon.png'

export default function ContentHandler({contentSituation}) {
    const Message = ({msg}) => <div className={styles.error}>
            <img className={styles.errorIcon} src={ErrorIcon.src} alt={'Error'}/>
        <p className={styles.errorMsg}>{msg}</p>
    </div>

    if(contentSituation == 'bad_response') {
        return <Message msg={'O servidor falhou em responder, tente recarregar a página.'}/>
    } else if(contentSituation == 'unexpected_response'){
        return <Message msg={'O servidor não conseguirá responder por agora, tente voltar novamente mais tarde.'}/>
    } else if(contentSituation == 'timed_out'){
        return <Message msg={'O servidor demorou para responder, tente mais tarde.'}/>
    }
}