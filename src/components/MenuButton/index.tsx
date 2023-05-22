import React from 'react';
import {Button, Fade, Menu, MenuItem} from "@mui/material";
import {useRouter} from "next/router";

interface IProps {
		children?: {id: number, path: string, name: string}[],
		title: string,
}

const MenuButton = ({children, title}: IProps) => {
		const router = useRouter();
		const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
		const open = Boolean(anchorEl);
		const handleClickEl = (event: React.MouseEvent<HTMLElement>) => {
				setAnchorEl(event.currentTarget);
		};
		const handleCloseEl = () => {
				setAnchorEl(null);
		};
		return (
				<>
						<Button
								id="fade-button"
								aria-controls={open ? 'fade-menu' : undefined}
								aria-haspopup="true"
								aria-expanded={open ? 'true' : undefined}
								onClick={handleClickEl}
								sx={{fontSize: '17px', borderBottom: '1px solid #d8d8da', borderRadius: 0, paddingBottom: 0}}
						>
								{title}
						</Button>
						<Menu
								id="fade-menu"
								MenuListProps={{
										'aria-labelledby': 'fade-button',
								}}
								anchorEl={anchorEl}
								open={open}
								onClose={handleCloseEl}
								TransitionComponent={Fade}
						>
								{
										children && children.map(el => (
												<MenuItem key={el.id} onClick={() => {
														router.push(el.path)
														handleCloseEl()
												}
												}>{el.name}</MenuItem>
										))
								}
						</Menu>
				</>
		);
};

export default MenuButton;