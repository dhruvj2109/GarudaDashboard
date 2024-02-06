import React from 'react';
import styles from './Header.module.scss';
import { SlBell } from 'react-icons/sl';
import { LuUserCircle2 } from 'react-icons/lu';
import { IoLocationOutline } from 'react-icons/io5';

const Header = () => {
	return (
		<div className={styles['header']}>
			<div className={styles['header-contents']}>
				<SlBell className={styles['header-contents--icon']} />
				<LuUserCircle2 className={styles['header-contents--icon']} />
				<div className={styles['header-contents--input']}>
					<IoLocationOutline className={styles['location-icon']} />
					<input placeholder="Noida" />
				</div>
			</div>
		</div>
	);
};

export default Header;
