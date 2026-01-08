import { getImgPath } from '@/utils/image';
import Image from 'next/image';
import Link from 'next/link';

const Logo: React.FC = () => {

  return (
    <Link href="/">
      <h3 className='text-xl'
      style={{fontFamily:'lato regular'}}>Aqil portfolio </h3>
    </Link>
  );
};

export default Logo;
