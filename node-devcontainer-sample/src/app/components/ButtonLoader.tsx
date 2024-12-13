import { Box, CircularProgress, Stack } from '@mui/material';

type Props = {
    descriptionBeforeLoad: string;
    descriptionLoading: string;
    isLoading: boolean;
};

export default function ButtonLoader(props: Props) {
    return (
        !props.isLoading ? (
            <>{props.descriptionBeforeLoad}</>
        ) : (
            <Stack
                direction="row"
                columnGap={1}
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Box>{props.descriptionLoading}</Box>
                <CircularProgress
                    sx={{ color: 'red' }}
                    size={30}
                    thickness={6}
                />
            </Stack>
        )
    );
}
