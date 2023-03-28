import React,{useState} from "react";
import {Box, Checkbox, FormControlLabel, FormGroup, Modal, Typography} from "@mui/material";
import {style, styleH2} from "./style";

export const ChildModal=({open,close})=>{
    return<Modal open={open} onClose={close} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style}>
            <Typography variant="h6" component="h2" sx={styleH2}>Settings</Typography>
            <FormGroup>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Performance and functionality cookies" />
                <FormControlLabel control={<Checkbox defaultChecked />} label="Analytics and customization cookies" />
                <FormControlLabel control={<Checkbox defaultChecked />} label="Advertising cookies" />
                <FormControlLabel control={<Checkbox defaultChecked />} label="Unclassified cookies" />
            </FormGroup>
        </Box>
    </Modal>
}