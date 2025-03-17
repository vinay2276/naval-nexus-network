
import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MessageSquare, Award, Bookmark } from 'lucide-react';

interface ProfileCardProps {
  id: string;
  name: string;
  role: string;
  company?: string;
  year?: string;
  image: string;
  skills: string[];
  available: boolean;
  featured?: boolean;
  className?: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  id,
  name,
  role,
  company,
  year,
  image,
  skills,
  available,
  featured = false,
  className = '',
}) => {
  return (
    <div 
      className={`glassmorphism rounded-xl overflow-hidden card-hover ${
        featured ? 'border-naval-accent/30 bg-naval-subtle/50' : ''
      } ${className}`}
    >
      {featured && (
        <div className="bg-naval-accent text-white px-3 py-1 text-xs font-medium flex items-center justify-center">
          <Award className="w-3 h-3 mr-1" />
          Featured Alumni
        </div>
      )}
      
      <div className="p-5">
        <div className="flex items-center gap-4">
          {/* Profile Image */}
          <div className="relative">
            <img 
              src={image} 
              alt={name}
              className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-sm"
            />
            {available && (
              <span className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-white rounded-full" 
                    title="Available for mentorship">
              </span>
            )}
          </div>
          
          <div className="flex-1">
            <h3 className="font-display font-bold text-lg text-naval-DEFAULT">
              {name}
            </h3>
            <p className="text-gray-600 text-sm">
              {company ? (
                <>
                  {role} at <span className="font-medium">{company}</span>
                </>
              ) : (
                <>
                  {role}, <span className="font-medium">Batch of {year}</span>
                </>
              )}
            </p>
          </div>
          <button 
            className="p-2 text-gray-400 hover:text-naval-DEFAULT transition-colors"
            aria-label="Bookmark profile"
          >
            <Bookmark className="w-5 h-5" />
          </button>
        </div>
        
        {/* Skills */}
        <div className="mt-4 flex flex-wrap gap-2">
          {skills.slice(0, 3).map((skill, index) => (
            <Badge key={index} variant="secondary" className="text-xs bg-naval-subtle text-naval-DEFAULT">
              {skill}
            </Badge>
          ))}
          {skills.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{skills.length - 3} more
            </Badge>
          )}
        </div>
        
        {/* Actions */}
        <div className="mt-5 flex gap-2">
          <Link to={`/profile/${id}`} className="flex-1">
            <Button 
              variant="outline" 
              className="w-full border-naval-DEFAULT text-naval-DEFAULT hover:bg-naval-subtle"
            >
              View Profile
            </Button>
          </Link>
          <Link to={`/messages/new/${id}`} className="flex-grow-0">
            <Button className="bg-naval-DEFAULT hover:bg-naval-dark">
              <MessageSquare className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
