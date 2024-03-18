import React from 'react';
import styles from './container.module.scss';

export const Container: React.FC<{ children: React.ReactElement }> = ({ children }) => (
    <div className={styles.container}>{children}</div>
)