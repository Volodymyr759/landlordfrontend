import { List, ListItem, ListItemIcon } from '@mui/material';
import { Props } from './types';

export const ListCard = ({ title='', items }: Props) => {
    return (
        <>
            <p className='p-small-blue-minmargin'>{title}</p>
            <List>
                {items.map((item, index) => (
                    <ListItem
                        key={index}
                        alignItems="flex-start"
                    >
                        <ListItemIcon className='list-item'>
                            {/* <span>{item.iconText}</span> */}
                            {item.icon}
                        </ListItemIcon>
                        {/* <span className='p-regular-nomargin'>{item.text}</span> */}
                        {item.content}
                    </ListItem>
                ))}
            </List>
        </>
    );
};
