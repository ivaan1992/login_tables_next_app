


import styles from '@/styles/signin.module.css';
import Input from '@/components/input';

const SignUp = () => {
    return (
        <form className={styles.signInForm}>
            {/* <Input name="email" type="email" placeHolder="Correo Electronico"  /> */}
            <Input name="username" type="text" placeHolder="Usuario"  />
            <Input name="password" type="password" placeHolder="Contraseña" />
            <button>Crear cuenta</button>
        </form>
    )
}

export default SignUp;