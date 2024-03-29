import * as C from './styles';

import logoImg from '../../images/camera-removebg.png';

export const Header = () => {

    return (
        <C.Container>
            <C.LogoArea>
                <C.Logo src={logoImg}></C.Logo>
                <C.TextLogo>Galeria de Fotos</C.TextLogo>
            </C.LogoArea>
        </C.Container>
    );
}