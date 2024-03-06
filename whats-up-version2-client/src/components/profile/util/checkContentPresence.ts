const checkContentPresence = (content: string | null) => {
  return content && content.length > 1 ? true : false;
};

export default checkContentPresence;
