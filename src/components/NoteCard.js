import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card'
import React from 'react';
import  IconButton  from '@material-ui/core/IconButton';
import { DeleteOutlined } from '@material-ui/icons';
import { Typography } from '@material-ui/core';


const NoteCard = ({note,handleDelete}) => {



    return (  
        <Card elevation={3}>
            <CardHeader
            action={
                <IconButton onClick={() => handleDelete(note.id) } >
                    <DeleteOutlined/>
                </IconButton>
            }
            title={note.title}
            subheader={note.category} />
            <CardContent>
                <Typography variant="body2" color="textSecondary">
                    {note.details}
                </Typography>
            </CardContent>
        </Card>
    );
}
 
export default NoteCard;
