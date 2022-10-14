import notification from '../assets/icons/notification.png'
import logout from '../assets/icons/logout.png'
import user from '../assets/icons/user.png'

function Nav() {

  let menus = [
    { src: logout, },
    { src: notification }
  ];

  return (
      <div className="shadow-md w-full fixed top-0 left-0 z-0">
          <div className="md:flex items-center justify-end bg-white py-4 md:px-4 px-7">
              <div className="font-bold text-2x-l cursor-pointer flex items-center">
                <span>
                </span>
              </div>
              <div className='flex items-center mr-6'>
                <img src={user} className='rounded-full object-cover w-8 h-8 mr-2' />
                <div className='grid'>
                  <span className='text-sm font-semibold'>Matheus Telles</span>
                  <span className='text-xs tracking-wider'>201910992</span>
                </div>
              </div>
              <ul className='flex'>
                {menus.map((menu, index) => (
                  <li key={index} className={`mx-3`}>
                      <img src={menu.src} className='w-5' />
                  </li>
                ))}
              </ul>
          </div>
      </div>
  )
}

export default Nav