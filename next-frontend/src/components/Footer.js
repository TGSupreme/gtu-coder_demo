import React from 'react'

const Footer = ({profile}) => {
  return (
    <>
    <div>
    <div class="bg-primary">
          <div class="container flex flex-col justify-between py-6 sm:flex-row">
            <p class="text-center font-body text-white md:text-left">
              © Copyright 2022. All right reserved, ATOM.
            </p>
            <div class="flex items-center justify-center pt-5 sm:justify-start sm:pt-0">
              <a href={profile.fblink}>
                <i class="bx bxl-facebook-square text-2xl text-white hover:text-yellow"></i>
              </a>
              <a href={profile.twitterlink} class="pl-4">
                <i class="bx bxl-twitter text-2xl text-white hover:text-yellow"></i>
              </a>
              <a href={profile.gitlink} class="pl-4">
                <i class="bx bxl-github text-2xl text-white hover:text-yellow"></i>
              </a>
              <a href={profile.linkedinlink} class="pl-4">
                <i class="bx bxl-linkedin text-2xl text-white hover:text-yellow"></i>
              </a>
              <a href={profile.instalink} class="pl-4">
                <i class="bx bxl-instagram text-2xl text-white hover:text-yellow"></i>
              </a>
            </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default Footer