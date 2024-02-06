import React from 'react';
import styles from './Dashboard.module.scss';

const DataList = () => {
	const dataList = ['name', 'Email', 'Phone', 'Role', 'Status', 'Action'];
	return (
		<div className={styles["data-list_cont"]}>
			<div className={styles["head"]}>
				<p>User</p>
				<p>
					<span>Home</span>
					<span>user</span>
				</p>
			</div>

			<div className={styles["body"]}>
				<div className={styles["body_head"]}>
					<div className={styles["body-left"]}>
						<span>
							<input placeholder="Search" />
						</span>
						<span style={{ border: '1px solid black', padding: "0 20px" }}>Filter</span>{' '}
					</div>
					<div className={styles["body-right"]}>
						<span>desc</span>
						<span>product</span>
						<span>User</span>
					</div>
				</div>
				<table>
					<thead>
						<tr>
							{dataList?.map(curEl => (
								<td key={curEl}>{curEl}</td>
							))}
						</tr>
					</thead>
					<tbody></tbody>
				</table>
			</div>
		</div>
	);
};

export default DataList;
