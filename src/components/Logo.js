import React from 'react'
import { Link, withRouter } from 'react-router-dom'

import './Logo.css'

export default ({ inverted }) => (
  <svg className='Logo' width='142' height='132'>
    <defs>
      <path id='a' d='M0 92.345V.553h109.565v91.792H0z' />
    </defs>
    <g fill='none' fillRule='evenodd'>
      <g fill='currentColor'>
        <path d='M73.332 49.27h2.434c0 .564.158 1.005.473 1.323.313.315.71.474 1.19.474.407 0 .742-.112.998-.334.26-.226.39-.524.39-.893 0-.21-.042-.387-.126-.533a1.26 1.26 0 0 0-.34-.385 2.53 2.53 0 0 0-.522-.293c-.2-.086-.412-.172-.642-.258-.47-.17-.916-.346-1.343-.527a5.17 5.17 0 0 1-1.137-.643 2.864 2.864 0 0 1-.79-.893c-.199-.35-.296-.777-.296-1.288 0-.521.102-.973.307-1.36a2.85 2.85 0 0 1 .82-.957c.34-.248.736-.432 1.188-.552.45-.12.918-.18 1.405-.18.61 0 1.15.09 1.614.269.467.177.858.422 1.174.733.314.31.551.665.707 1.066.157.4.237.826.237 1.277h-2.447c0-.462-.113-.827-.335-1.096-.225-.267-.552-.401-.979-.401-.342 0-.638.088-.884.267-.25.178-.374.442-.374.789 0 .34.129.611.388.82.257.205.625.394 1.102.564.459.16.913.33 1.36.512.45.178.848.396 1.192.65.347.253.626.563.836.927.212.367.317.817.317 1.352 0 .511-.097.975-.293 1.392a3.018 3.018 0 0 1-.814 1.05 3.693 3.693 0 0 1-1.233.657 5.126 5.126 0 0 1-1.554.227 5.023 5.023 0 0 1-1.621-.249 3.542 3.542 0 0 1-1.268-.73 3.366 3.366 0 0 1-.834-1.178c-.2-.465-.3-.998-.3-1.6M82.847 52.755v-10.52h4.39c.579 0 1.103.102 1.575.307.472.206.872.482 1.207.829.335.347.591.75.772 1.21.18.46.27.946.27 1.461 0 .509-.09.993-.27 1.452-.18.46-.437.864-.77 1.211a3.731 3.731 0 0 1-1.206.829 3.904 3.904 0 0 1-1.576.308H85.28v2.913h-2.433zm2.433-4.901h1.663c.25 0 .479-.05.694-.152.21-.097.389-.23.533-.396a1.73 1.73 0 0 0 .337-.574c.083-.22.122-.45.122-.69 0-.24-.039-.47-.122-.691a1.781 1.781 0 0 0-.337-.583 1.695 1.695 0 0 0-.53-.396 1.625 1.625 0 0 0-.697-.15H85.28v3.632z' />
      </g>
      <path
        d='M90.68 52.755l3.753-10.52h2.235l3.796 10.52h-2.638l-.403-1.226h-3.738l-.41 1.226h-2.594zm3.592-3.184h2.55l-1.26-4.328-1.29 4.328zM100.633 47.494c0-.719.122-1.41.366-2.08.242-.666.6-1.255 1.072-1.767a5.185 5.185 0 0 1 1.754-1.222c.696-.303 1.493-.455 2.392-.455.772 0 1.466.113 2.082.337a5.037 5.037 0 0 1 1.597.93c.449.393.81.856 1.08 1.389.273.533.442 1.097.51 1.695h-2.536a3.029 3.029 0 0 0-.296-.854 2.392 2.392 0 0 0-.557-.685 2.833 2.833 0 0 0-.805-.455 3.145 3.145 0 0 0-1.039-.164c-.498 0-.945.091-1.336.277a2.94 2.94 0 0 0-.994.734 3.2 3.2 0 0 0-.616 1.066 3.772 3.772 0 0 0-.212 1.254c0 .46.078.893.235 1.3.156.405.37.757.649 1.06.274.298.606.539.997.714.386.176.823.264 1.307.264.708 0 1.287-.178 1.737-.535.45-.357.75-.795.901-1.313h2.58a4.67 4.67 0 0 1-.574 1.57 4.985 4.985 0 0 1-1.098 1.283c-.444.372-.969.664-1.575.874a6.08 6.08 0 0 1-2 .315c-.88 0-1.666-.15-2.363-.452a5.35 5.35 0 0 1-1.77-1.208 5.146 5.146 0 0 1-1.107-1.758 5.869 5.869 0 0 1-.381-2.114M112.973 52.755h2.463v-10.52h-2.463zM116.498 52.755l3.752-10.52h2.235l3.797 10.52h-2.639l-.402-1.226h-3.737l-.411 1.226h-2.595zm3.591-3.184h2.551l-1.26-4.328-1.29 4.328zM127.344 52.755v-10.52h2.434v8.414h2.99v2.106zM91.818 64.427h1.364c0 .719.215 1.294.645 1.72.432.43 1.006.643 1.726.643.611 0 1.111-.16 1.505-.473.391-.318.586-.76.586-1.332 0-.309-.061-.565-.18-.77-.12-.206-.271-.38-.457-.522a2.63 2.63 0 0 0-.64-.35c-.24-.087-.481-.173-.726-.251-.452-.142-.886-.29-1.307-.453a4.586 4.586 0 0 1-1.098-.581 2.652 2.652 0 0 1-.758-.852c-.19-.337-.286-.755-.286-1.254 0-.47.085-.888.257-1.254.17-.368.4-.673.691-.917.29-.245.633-.43 1.029-.56.395-.13.813-.197 1.25-.197.491 0 .94.079 1.35.231a3.13 3.13 0 0 1 1.06.655c.296.282.526.618.69 1.015.163.396.247.834.247 1.313h-1.363c-.02-.631-.2-1.12-.54-1.462-.34-.347-.816-.519-1.43-.519-.551 0-1.004.139-1.352.419-.35.278-.526.674-.526 1.188 0 .27.053.499.16.69.104.19.246.353.424.486.178.138.386.25.623.347.24.094.486.181.745.26.432.142.858.293 1.277.454.42.162.797.363 1.126.602.33.24.596.536.797.885.2.35.3.785.3 1.309a3 3 0 0 1-.278 1.313 2.966 2.966 0 0 1-.752.983c-.316.27-.687.475-1.112.617a4.3 4.3 0 0 1-1.373.213 4.15 4.15 0 0 1-1.463-.25c-.445-.167-.83-.4-1.16-.707a3.176 3.176 0 0 1-.772-1.127 3.9 3.9 0 0 1-.279-1.512M99.887 58.492V57.26h6.815v1.232h-2.734v9.288h-1.362v-9.288z'
        fill='currentColor'
      />
      <g fill='currentColor'>
        <path d='M107.94 64.368V57.26h1.364v7.108c0 .323.054.632.159.925a2.238 2.238 0 0 0 1.177 1.304c.278.13.594.193.948.193a2.237 2.237 0 0 0 1.666-.712c.2-.215.354-.47.464-.768.11-.293.166-.609.166-.942V57.26h1.362v7.108c0 .5-.088.972-.262 1.411-.177.445-.42.832-.737 1.16a3.426 3.426 0 0 1-1.152.79 3.77 3.77 0 0 1-1.507.293 3.704 3.704 0 0 1-1.51-.294 3.552 3.552 0 0 1-1.146-.789 3.413 3.413 0 0 1-.735-1.154 3.887 3.887 0 0 1-.256-1.417M117.49 67.78V57.26h3.237c.87 0 1.64.15 2.317.45.674.303 1.246.699 1.708 1.188a5.1 5.1 0 0 1 1.06 1.685 5.37 5.37 0 0 1 0 3.874 5.107 5.107 0 0 1-1.06 1.684 5.313 5.313 0 0 1-1.708 1.189c-.677.298-1.448.45-2.317.45h-3.238zm1.363-1.233h1.876c.64 0 1.211-.114 1.72-.344a3.82 3.82 0 0 0 1.265-.91c.34-.376.6-.804.781-1.284.182-.479.272-.976.272-1.49 0-.509-.09-1.002-.272-1.483a4.009 4.009 0 0 0-.781-1.287 3.977 3.977 0 0 0-1.265-.91 4.127 4.127 0 0 0-1.72-.348h-1.876v8.056z' />
      </g>
      <path
        fill='currentColor'
        d='M127.947 67.78h1.407V57.26h-1.407zM131.142 62.52c0-.71.125-1.394.374-2.058a5.22 5.22 0 0 1 2.785-2.979c.67-.304 1.426-.459 2.269-.459.838 0 1.595.155 2.264.46.672.306 1.24.712 1.703 1.22.464.51.823 1.096 1.075 1.758.25.664.376 1.349.376 2.058 0 .71-.125 1.396-.376 2.056a5.457 5.457 0 0 1-1.075 1.761 5.097 5.097 0 0 1-1.703 1.228c-.669.303-1.426.457-2.264.457-.843 0-1.6-.154-2.27-.457a5.162 5.162 0 0 1-1.707-1.228 5.35 5.35 0 0 1-1.077-1.756 5.794 5.794 0 0 1-.374-2.061m1.444 0c0 .552.09 1.085.273 1.596.183.511.45.964.797 1.36.344.396.762.714 1.25.953.489.24 1.043.36 1.664.36.608 0 1.163-.12 1.656-.36.496-.24.914-.557 1.254-.953.339-.396.6-.849.786-1.36a4.62 4.62 0 0 0 .278-1.596 4.65 4.65 0 0 0-.278-1.6 4.344 4.344 0 0 0-.786-1.364 3.74 3.74 0 0 0-1.254-.947 3.827 3.827 0 0 0-1.656-.352c-.621 0-1.175.118-1.663.352-.489.235-.907.55-1.251.947a4.215 4.215 0 0 0-.797 1.366 4.755 4.755 0 0 0-.273 1.598M120.359 26.738L103.03.252 76.043 17.949c15.076-7.026 33.066-3.442 44.316 8.789M31.048 115.268l10.623 16.236L56.923 121.5c-9.015 3.405-19.318.984-25.875-6.232'
      />
      <g transform='translate(0 23.46)'>
        <mask id='b' fill='#fff'>
          <use xlinkHref='#a' />
        </mask>
        <path
          d='M60.23 50.527C49.515 34.355 52.654 13.034 66.795.553L0 44.357l26.918 41.138c-4.659-10.414-1.28-22.968 8.531-29.482 10.925-7.254 25.655-4.268 32.9 6.669 6.28 9.482 4.864 21.819-2.74 29.663l43.956-28.823c-17.129 8.745-38.454 3.43-49.336-12.995m-8.65-10.308c0 5.033-3.972 9.112-8.873 9.112s-8.875-4.08-8.875-9.112c0-5.031 3.974-9.112 8.875-9.112s8.873 4.08 8.873 9.112'
          fill='currentColor'
          mask='url(#b)'
        />
      </g>
    </g>
  </svg>
)
