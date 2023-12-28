import React from 'react';
import Fab from '@mui/material/Fab/Fab';

interface IPillButtonProps {
    text : string;
    onClick ?: (event : React.MouseEvent<HTMLElement, MouseEvent>) => void;

    id ?: string;
    value ?: string | number | Array<string>;
    size ?: 'small' | 'medium' | 'large';
    color ?: 'inherit' | 'primary' | 'secondary' | 'default';
    className ?: string;
    disabled ?: boolean;
    icon ?: React.ReactNode;
    type ?: 'submit' | 'reset';
}

const PillButton = (props: IPillButtonProps) : React.ReactElement => {
    const getFontSizeClass = () : string => {
        let value = 'fs14'; // Default to fs14 when size is not specified
        if (props.size === 'small') {
            value = 'fs13';
        }
        if (props.size === 'medium') {
            value = 'fs14';
        }
        if (props.size === 'large') {
            value = 'fs15';
        }
        return value;
    };

    return (
        <Fab
            id={props.id}
            value={props.value}
            variant='extended'
            color={props.color}
            disabled={props.disabled}
            size={props.size}
            type={props.type}
            onClick={props.onClick}
            className={`fdr aic ${props.size === 'small' ? 'pl5 pr5' : ''} ${props.color === 'secondary' ? 'cpd' : ''} ${props.className}`}>
            <span className={`${getFontSizeClass}`}>{props.text.toUpperCase()}</span>
            {props.icon && <span className={'ml5 aic jcc'}>{props.icon}</span>}
        </Fab>
    );
}

export default PillButton;