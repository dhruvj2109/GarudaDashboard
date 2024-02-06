import React, { useMemo } from 'react';
import styles from './Menu.module.scss';
import { LuLayoutDashboard } from 'react-icons/lu';
import { GoProjectRoadmap } from 'react-icons/go';
import { IoBriefcaseOutline } from 'react-icons/io5';
import { LuUsers } from 'react-icons/lu';
import { Link, useLocation } from 'react-router-dom';
import { RiPlantLine } from 'react-icons/ri';
import { PiCassetteTapeLight } from 'react-icons/pi';
import { VscWorkspaceUntrusted } from 'react-icons/vsc';
import { FaVenus } from 'react-icons/fa6';
import { RiUserVoiceLine } from 'react-icons/ri';
import { GrMapLocation } from 'react-icons/gr';

const Menu = () => {
	const location = useLocation();
	const navArry = useMemo(
		() => [
			{ id: '/', name: 'Dashboard', icon: <LuLayoutDashboard className={styles['icon']} /> },
			{ id: '/project', name: 'Project', icon: <GoProjectRoadmap className={styles['icon']} /> },
			{ id: '/department', name: 'Department', icon: <IoBriefcaseOutline className={styles['icon']} /> },
			{ id: '/user', name: 'User', icon: <LuUsers className={styles['icon']} /> },
			{ id: '/planning', name: 'Flight Planning', icon: <RiPlantLine className={styles['icon']} /> },
			{ id: '/workspace', name: 'Workspace', icon: <VscWorkspaceUntrusted className={styles['icon']} /> },
			{ id: '/asset', name: 'Asset', icon: <PiCassetteTapeLight className={styles['icon']} /> },
			{ id: '/vendor', name: 'Vendor', icon: <FaVenus className={styles['icon']} /> },
			{ id: '/client', name: 'Client', icon: <RiUserVoiceLine className={styles['icon']} /> },
			{ id: '/location', name: 'Location', icon: <GrMapLocation className={styles['icon']} /> }
		],
		[]
	);

	return (
		<div className={styles['menu']}>
			<h2>Blue Hawk</h2>
			<ul>
				{navArry.map(t => (
					<Link to={t.id} key={t.name}>
						<li className={location.pathname === t.id ? styles['menu--item-active'] : styles['menu--item']}>
							{t.icon}
							{t.name}
						</li>
					</Link>
				))}
			</ul>
		</div>
	);
};

export default Menu;
