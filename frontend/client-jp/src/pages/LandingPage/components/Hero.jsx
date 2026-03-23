import React from 'react';
import {motion} from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Building2, TrendingUp, Users } from 'lucide-react';

const Hero = () => {
    const isAuthenticated = true;
    const user = {fullName: "Angel", role: "employer"}
    const navigate = useNavigate();
    const stats = [
        {icon: Users, label: 'Active Users', value: '2M+'},
        {icon: Building2, label: 'Companies', value: '20K+'},
        {icon: TrendingUp, label: 'Jobs Posted', value: '120K+'}
    ];
    
  return (
    <div>Hero</div>
  )
}

export default Hero