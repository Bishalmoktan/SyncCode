import Avatar from 'react-avatar';

interface ClientProps {
    username: string;
}

const Client = ({ username } : ClientProps) => {
    return (
        <div className="flex flex-col gap-1 items-center">
            <Avatar name={username} size={'50'} round="14px" />
            <span className="text-sm">{username}</span>
        </div>
    );
};

export default Client;