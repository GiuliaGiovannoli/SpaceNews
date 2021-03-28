import React from "react";

import "./styles.css";
import { makeStyles } from '@material-ui/core/styles';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


export default function Footer() {
    
        return (
            <footer>
                <div id="socials">
                        <YouTubeIcon id="network"/>
                        <TwitterIcon id="network"/>
                        <FacebookIcon id="network"/>
                        <InstagramIcon id="network"/>
                        <LinkedInIcon id="network"/>
                </div>
            </footer>
        );
}