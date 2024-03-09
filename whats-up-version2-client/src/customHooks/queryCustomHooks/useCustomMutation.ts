import {
  useMutation,
  useQueryClient,
  MutationFunction,
} from "@tanstack/react-query";

const useCustomMutation = <TData, TVariables = undefined>(
  queryFn: MutationFunction<TData, TVariables>,
  queryKeyArr?: string[],
  callback?: (data?: TData) => void
) => {
  const queryClient = useQueryClient();

  const mutationObj = useMutation({
    mutationFn: (data: TVariables) => queryFn(data),
    /*
      if (data !== undefined) {
        return queryFn(data);
      } else {
        return (queryFn as MutationFunction<TData, undefined>)(undefined);
      }
      */
    onSuccess: (data) => {
      if (queryKeyArr?.length) {
        queryKeyArr.forEach((queryKey) => {
          queryClient.invalidateQueries({ queryKey: [queryKey] });
        });
      }
      if (callback) {
        callback(data);
      }
    },
  });

  return { ...mutationObj };
};

export default useCustomMutation;
