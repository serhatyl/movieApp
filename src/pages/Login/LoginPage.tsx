import React from 'react';
import {useForm} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {LoginFormModel} from '../../models';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';
import {useAuth} from '../../hooks/useAuth';
import {useNavigate} from 'react-router-dom';
import OctButton from '../../components/ui/Button/Button';
import {useLayout} from '../../hooks/useLayout';

const LoginPage = () => {
  const {setIsAuthenticated} = useAuth();
  const {toggleLoader} = useLayout();
  const navigate = useNavigate();

  const schema = yup.object().shape({
    email: yup.string().email('Geçerli bir e-posta adresi giriniz').required('Bu alan zorunludur'),
    password: yup
      .string()
      .min(8, 'Şifre en az 8 karakter olmalıdır')
      .matches(/[A-Z]/, 'Şifre en az bir büyük harf içermelidir')
      .matches(/\d/, 'Şifre en az bir rakam içermelidir')
      .required('Bu alan zorunludur'),
  });

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<LoginFormModel>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: LoginFormModel) => {
    toggleLoader(true);
    const {email, password} = data;
    //NOTE - Fake login service belki loading state'i vs eklenebilir
    if (email === 'user@mail.com' && password === 'Password1') {
      setIsAuthenticated(true);
      setTimeout(() => {
        toggleLoader(false);
        navigate('/movies');
      }, 1000);
    } else {
      alert('Lütfen email ve şifrenizi kontrol ederek tekrar deneyiniz');
      toggleLoader(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Giriş Yap</h2>
      <div>
        <input
          {...register('email')}
          type="text"
          placeholder="Email: user@mail.com yazabilirsiniz"
        />
        {errors.email && <div className="form-error">{errors.email.message}</div>}
      </div>

      <div>
        <input
          {...register('password')}
          type="password"
          placeholder="Şifre: Password1 yazabilirsiniz"
        />
        {errors.password && <div className="form-error">{errors.password.message}</div>}
      </div>

      <OctButton type="submit">
        Giriş
        <FontAwesomeIcon icon={faChevronRight} size="xs" />
      </OctButton>
    </form>
  );
};

export default LoginPage;
