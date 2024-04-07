import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Paper, Typography, Box } from '@mui/material';
import api from '../utils/ghostAPI';

const BlogPost = () => {
    const [post, setPost] = useState(null);
    const { slug } = useParams();

    useEffect(() => {
        api.posts
            .read({ slug, include: 'authors' }) // Ensure the 'authors' are included in the API response
            .then((post) => {
                setPost(post);
            })
            .catch((err) => {
                console.error(err);
            });
    }, [slug]);

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    if (!post) return <Paper style={{ margin: '20px', padding: '20px' }}>Loading...</Paper>;

    return (
        <Paper style={{ margin: '20px', padding: '20px', backgroundColor: '#f5f5f5' }}>
            <Typography variant="h3" style={{ marginBottom: '20px', color: '#123A6D' }}>{post.title}</Typography>
            <Box display="flex" justifyContent="center" alignItems="center">
                <img src={post.feature_image} alt={post.title} style={{ maxWidth: '50%', height: 'auto', marginBottom: '20px' }} />
            </Box>
            <Typography variant="subtitle1" style={{ color: '#666', marginBottom: '20px' }}>
                Published on {formatDate(post.published_at)} by {post.authors.map(author => author.name).join(', ')}
            </Typography>
            <div style={{
                color: '#333',
                lineHeight: '1.6',
                fontSize: '18px',
                textAlign: 'justify',
                marginBottom: '20px',
                fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif'
            }} dangerouslySetInnerHTML={{ __html: post.html }} />
        </Paper>
    );
};

export default BlogPost;
