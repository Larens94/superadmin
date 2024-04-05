import PropTypes from "prop-types";
// material
import { styled, useTheme } from "@mui/material/styles";
import { Typography, Box } from "@mui/material";

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  height: "100%",
  display: "flex",
  textAlign: "center",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  padding: theme.spacing(2),
}));

// ----------------------------------------------------------------------

EmptyContent.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string,
  description: PropTypes.string,
};

export default function EmptyContent({ ...props }) {
  const { title, description, img, ...other } = props;
  const theme = useTheme();
  return (
    <RootStyle {...other}>
      <Box
        component="svg"
        width="1080"
        height="720"
        viewBox="0 0 1080 720"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        sx={{ width: 360 }}
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M553.133 23.8597C661.054 16.5795 781.47 -32.6146 865.043 36.0539C951.428 107.032 953.696 236.327 947.588 347.964C941.866 452.541 908.95 555.733 832.68 627.511C758.441 697.379 654.898 725.265 553.133 719.191C457.333 713.473 377.198 659.336 305.075 596.022C226.047 526.646 135.188 453.007 130.258 347.964C125.202 240.234 195.047 141.083 280.646 75.4767C356.922 17.0165 457.249 30.328 553.133 23.8597Z"
          fill={theme.palette.background.default}
        />
        <path
          d="M797.574 249.254H381.776C358.007 249.254 340.383 271.314 345.632 294.496L391.334 496.349C395.158 513.235 410.164 525.224 427.478 525.224H751.871C769.185 525.224 784.191 513.235 788.015 496.349L833.718 294.496C838.966 271.314 821.343 249.254 797.574 249.254Z"
          fill={theme.palette.primary.main}
          stroke="black"
          stroke-width="0.788486"
        />
        <rect
          x="325.926"
          y="227.176"
          width="529.074"
          height="54.4055"
          rx="6.30788"
          fill="url(#paint0_linear_6_2488)"
        />
        <rect
          x="565.626"
          y="116"
          width="39.4243"
          height="147.447"
          rx="6.30788"
          fill={theme.palette.grey[500]}
        />
        <circle
          cx="585.338"
          cy="239.004"
          r="10.2503"
          fill={theme.palette.common.white}
        />
        <rect
          x="451.295"
          y="309.967"
          width="38.6358"
          height="153.755"
          rx="15.7697"
          fill={theme.palette.background.default}
        />
        <rect
          x="526.201"
          y="309.967"
          width="38.6358"
          height="153.755"
          rx="15.7697"
          fill={theme.palette.background.default}
        />
        <rect
          x="601.896"
          y="309.967"
          width="38.6358"
          height="153.755"
          rx="15.7697"
          fill={theme.palette.background.default}
        />
        <rect
          x="676.802"
          y="309.967"
          width="38.6358"
          height="153.755"
          rx="15.7697"
          fill={theme.palette.background.default}
        />
        <circle
          cx="303.849"
          cy="227.176"
          r="78.8486"
          fill="url(#paint2_linear_6_2488)"
        />
        <path
          d="M302.82 218.434C299.927 218.434 297.337 217.728 295.049 216.315C292.761 214.868 290.962 212.782 289.649 210.057C288.337 207.332 287.681 204.035 287.681 200.166C287.681 196.298 288.337 193.001 289.649 190.276C290.962 187.551 292.761 185.482 295.049 184.069C297.337 182.622 299.927 181.899 302.82 181.899C305.747 181.899 308.338 182.622 310.592 184.069C312.879 185.482 314.679 187.551 315.991 190.276C317.303 193.001 317.959 196.298 317.959 200.166C317.959 204.035 317.303 207.332 315.991 210.057C314.679 212.782 312.879 214.868 310.592 216.315C308.338 217.728 305.747 218.434 302.82 218.434ZM302.82 211.521C304.2 211.521 305.394 211.134 306.403 210.36C307.446 209.586 308.254 208.358 308.825 206.676C309.431 204.994 309.734 202.824 309.734 200.166C309.734 197.509 309.431 195.339 308.825 193.657C308.254 191.975 307.446 190.747 306.403 189.973C305.394 189.199 304.2 188.812 302.82 188.812C301.475 188.812 300.28 189.199 299.237 189.973C298.228 190.747 297.421 191.975 296.815 193.657C296.243 195.339 295.957 197.509 295.957 200.166C295.957 202.824 296.243 204.994 296.815 206.676C297.421 208.358 298.228 209.586 299.237 210.36C300.28 211.134 301.475 211.521 302.82 211.521Z"
          fill="white"
        />
        <path
          d="M258.104 263.388V236.895H264.235V263.388H258.104ZM276.01 263.388V241.891H267.532V236.895H290.619V241.891H282.142V263.388H276.01ZM299.558 247.568H312.312V252.337H299.558V247.568ZM300.012 258.468H314.432V263.388H293.918V236.895H313.939V241.815H300.012V258.468ZM319.31 263.388V236.895H324.382L335.66 255.591H332.973L344.062 236.895H349.096L349.171 263.388H343.419L343.381 245.713H344.441L335.584 260.587H332.821L323.776 245.713H325.063V263.388H319.31Z"
          fill="white"
        />
        <defs>
          <linearGradient
            id="paint0_linear_6_2488"
            x1="325.926"
            y1="254.379"
            x2="855"
            y2="254.379"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#BBD2C5" />
            <stop stopColor="#292E49" />
            <stop offset="0.5" stopColor="#536976" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_6_2488"
            x1="565.626"
            y1="189.723"
            x2="605.05"
            y2="189.723"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#4CA1AF" />
            <stop offset="1" stopColor="#C4E0E5" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_6_2488"
            x1="225"
            y1="227.176"
            x2="382.697"
            y2="227.176"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#E65C00" />
            <stop offset="1" stopColor="#F9D423" />
          </linearGradient>
        </defs>
      </Box>
    </RootStyle>
  );
}
