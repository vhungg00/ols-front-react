import React, { memo } from "react";

import styles from './footer.module.scss';
import { Container } from '@/components/Container';

const FooterComponent: React.FC = () => {

    return (<footer className={styles.footer}>
        <Container>
            <i className="icon">dfh</i>
        </Container>
    </footer>)

}

export const FooterWrap = memo(FooterComponent);