<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Contracts\Pagination\Paginator;
use Response;
use Symfony\Component\HttpFoundation\Response as Foundationresponse;


/**
 * Class ApiController
 * @package App\Http\Controllers
 */
class ApiController extends Controller
{


    /**
     * @var int
     */
    protected $statusCode = Foundationresponse::HTTP_OK;

    /**
     * @return mixed
     */
    public function getStatusCode()
    {
        return $this->statusCode;
    }

    /**
     * @param mixed $statusCode
     */
    public function setStatusCode($statusCode)
    {
        $this->statusCode = $statusCode;
        return $this;
    }


    /**
     * @param string $message
     * @return mixed
     */
    public function responseNotFond($message = 'Not Fond!')
    {
        return $this->setStatusCode(Foundationresponse::HTTP_NOT_FOUND)->respondWithError($message);
    }


    /**
     * @param $data
     * @param array $header
     * @return mixed
     */
    public function respond($data, $header = [])
    {

        return Response::json($data,$this->getStatusCode(),$header);
    }


    /**
     * @param $status
     * @param array $data
     * @return mixed
     */
    public function respondWithStatus($status, array $data)
    {
        $status = [
            'status' => $status,
            'status_code' => $this->statusCode
        ];
        $data = array_merge($status,$data);
        return $this->respond($data);

    }

    /**
     * @param $data
     * @param string $status
     * @return mixed
     */
    public function respondWithSuccess($data, $status = "success")
    {

        return $this->respondWithStatus($status,[
            'data' => $data
        ]);
    }

    /**
     * @param string $message
     * @return mixed
     */
    public function respondCreated($message = "created")
    {
        return $this->setStatusCode(Foundationresponse::HTTP_CREATED)
            ->respondWithMessage($message);

    }

    /**
     * @param Paginator $paginator
     * @param $data
     * @return mixed
     */
    public function respondWithPagination(Paginator $paginator, $data,$status = "success")
    {

        $paginator = [
            'total_count' => $paginator->total(),
            'current_page' => $paginator->currentPage(),
            'total_pages' => ceil($paginator->total() / $paginator->perPage()),
            'limit' => (int) $paginator-> perPage()
        ];

        return $this->respondWithStatus($status,[

            'data' => $data,
            'paginator' => $paginator

        ]);

    }

    /**
     * @param $message
     * @param string $status
     * @return mixed
     */
    public function respondWithMessage($message, $status = "success")
    {
        return $this->respondWithStatus($status,[
            'message' => $message
        ]);
    }

    /**
     * @param $message
     * @return mixed
     */
    public function respondWithError($message,$status = "error")
    {
        return $this->respondWithStatus($status,[
            'error' => [
                'message' => $message
            ]
        ]);
    }

    /**
     * @param string $message
     * @return mixed
     */
    public function respondInteralError($message = "Interal Error!")
    {
        return $this->setStatusCode(Foundationresponse::HTTP_INTERNAL_SERVER_ERROR)
            ->respondWithError($message);

    }


}