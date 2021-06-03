def saddle_points(matrix):
    if not all(len(row) == len(matrix[0]) for row in matrix):
        raise ValueError("Rows have different length!")

    _rot_mat = zip(*matrix[::1])

    return set([ (row,i) for row in range(len(matrix)) for i,x in enumerate(matrix[row]) if x == max(matrix[row])]) & set([ (i,row) for row in range(len(_rot_mat)) for i,x in enumerate(_rot_mat[row]) if x == min(_rot_mat[row])])
