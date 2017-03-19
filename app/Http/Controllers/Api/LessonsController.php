<?php

namespace App\Http\Controllers\Api;

use App\Models\Lesson;
use App\Transformers\LessonsTransformer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Input;


class LessonsController extends ApiController
{


    /**
     * @var LessonsTransformer
     */
    protected $lessonTransformer;


    /**
     * LessonsController constructor.
     * @param LessonsTransformer $lessonTransformer
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * @return mixed
     */
    public function index()
    {
        $limit = Input::get('limit') ?: 3;


        $lessons = Lesson::paginate($limit);
        return $this->respondWithPaginator($lessons,new LessonsTransformer());

    }

    /**
     * @param $id
     * @return mixed
     */
    public function show($id)
    {
        $lesson = Lesson::find($id);

        if (! $lesson){
            return $this->responseNotFond("没有该课程");

        }

        return $this->respondWithItem($lesson,new LessonsTransformer());
    }

    public function store()
    {
        if(! Input::get('title') or !Input::get('body'))
        {
            return $this->setStatusCode(422)
                ->respondWithError("没有提供必要的参数");

        }

        Lesson::create(Input::all());

        return $this->respondCreated("新课程创建成功");
    }






}
