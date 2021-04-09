/**
 * @author [Peter]
 * @email [hoangvanlam9988@mail.com]
 * @create date 2021-04-09 14:21:43
 * @modify date 2021-04-09 14:21:43
 * @desc [description]
 */
const getExternalLinkProps = (): { target: string; rel: string } => ({
  target: "_blank",
  rel: "noreferrer noopener",
});

export default getExternalLinkProps;
