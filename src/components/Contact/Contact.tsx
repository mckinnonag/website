import React from 'react';
import Fab from '@mui/material/Fab';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from '@mui/material/Link';
import ContactProps from './ContactInterfaces';

// Array of contact links to render
const contactList: ContactProps[] = [
    {
        id: 1,
        href: 'https://www.linkedin.com/in/mckinnonag/',
        label: 'LinkedIn',
        icon: <LinkedInIcon sx={{mr: 1 }}/>,
    },
    {
        id: 2,
        href: 'https://www.github.com/mckinnonag',
        label: 'GitHub',
        icon: <GitHubIcon sx={{mr: 1 }}/>
    },
    {
        id: 3,
        href: 'mailto:mckinnonag@gmail.com',
        label: 'Email',
        icon: <MailOutlineIcon sx={{mr: 1 }}/>,
    }
]

// Renders each ContactProp in a FAB element
const renderIcons = ((props: ContactProps) => 
    <a key={props.id}
        href={props.href}
        target="_blank"
    >
        <Fab variant="extended" 
            aria-label="linkedin">
            {props.icon}
            {props.label}
        </Fab>
    </a>
);

const Contact = () => {
    return (
        <Container maxWidth="sm">
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
                {contactList.map((icon) => (
                    renderIcons(icon)
                ))}
            </Stack>
        </Container>
    );
}

export default Contact;