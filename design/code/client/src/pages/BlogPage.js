import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemText, Paper, Typography, ListItemAvatar, Avatar } from '@mui/material';
import api from '../utils/ghostAPI';

const BlogPage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        api.posts
            .browse({ limit: "all", include: "authors" }) // Ensure to include related data if needed
            .then((posts) => {
                setPosts(posts);
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    return (
        <Paper style={{ margin: '20px', padding: '20px', backgroundColor: '#f5f5f5' }}>
            <Typography variant="h4" style={{ marginBottom: '20px', color: '#123A6D' }}>
                Blog Posts
            </Typography>
            <List>
                {posts.map((post) => (
                    <ListItem key={post.id} style={{ marginBottom: '10px', backgroundColor: '#e3f2fd', borderRadius: '10px', padding: '10px' }}>
                        <ListItemAvatar>
                            <Avatar alt={post.title} src={post.feature_image} variant="square" />
                        </ListItemAvatar>
                        <ListItemText 
                            primary={<Link to={`/blog/${post.slug}`} style={{ textDecoration: 'none', color: '#0d47a1' }}>{post.title}</Link>}
                            secondary={`Published on ${formatDate(post.published_at)}`}
                        />
                    </ListItem>
                ))}
            </List>
        </Paper>
    );
};

export default BlogPage;
