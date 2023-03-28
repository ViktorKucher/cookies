import React, {useState} from "react";
import {Box, Button, Link, Modal, Typography} from "@mui/material";
import {ChildModal} from "./childModal";
import {style, styleBoxButton, styleH2, styleParagraf} from "./style";

export const Cookies = () => {
    const [open, setOpen] = useState(true);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [openTwo, setOpenTwo] = useState(false);
    const handleOpenTwo = () => setOpenTwo(true);
    const handleCloseTwo = () => setOpenTwo(false);
    return <>
        <div>
            <Button onClick={handleOpen} variant="contained" color="success">Open Cookies</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography variant="h6" component="h2" sx={styleH2}>
                        COOKIE POLICY
                    </Typography>
                    <Typography component={"p"} sx={styleParagraf}>
                        This Cookie Policy explains how we uses cookies and similar technologies to recognize you when
                        you visit our website at
                        https://amazondating.co It explains what these technologies are and why we use them, as well as
                        your rights to control our use of them.
                    </Typography>
                    <Typography component={"p"} sx={styleParagraf}>
                        In some cases we may use cookies to collect personal information, or that becomes personal
                        information if we combine it with other information.
                    </Typography>
                    <Typography component={"p"} sx={styleParagraf}>
                        You can freely five, deny, or withdraw your consent at any time. Use the “Accept” button to
                        consent. Use the "Decline" button to continue without accepting.
                    </Typography>
                    <Typography component={"p"} sx={styleParagraf}>
                        More info:
                        <Link href='#'> Cookies Policy</Link>
                    </Typography>
                    <Box sx={styleBoxButton}>
                        <Button onClick={handleClose}  variant="contained" color="error">Decline</Button>
                        <Button onClick={handleOpenTwo}  variant="contained" color="secondary">Settings</Button>
                        <Button onClick={handleClose}  variant="contained" color="success">Accept</Button>
                    </Box>
                    <ChildModal open={openTwo} close={handleCloseTwo}/>
                </Box>
            </Modal>
        </div>
    </>
}