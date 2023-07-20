import styles from '@/styles/signin.module.css';
import Input from '@/components/input';

const SignIn = () => {
    return (
        <form className={styles.signInForm}>
            <Input name="username" type="text" placeHolder="Usuario"  />
            <Input name="password" type="password" placeHolder="Contraseña" />
            <button>Iniciar sesion</button>
        </form>
    )
}

export default SignIn;