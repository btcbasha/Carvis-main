import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

interface ImageAvatarsProps {
  src: string;
}

export default function ImageAvatars({ src }: ImageAvatarsProps) {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar alt="Avatar" src={src} />
    </Stack>
  );
}